import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const Main = styled.div`
  font-family: Poppins, 'Helvetica Neue', Helvetica, sans-serif;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DropDownContainer = styled.div<{ size: Size }>`
  width: 200px;
  ${(props) =>
    props.size === 'small' &&
    css`
      width: 77px;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 123px;
    `}
${(props) =>
    props.size === 'large' &&
    css`
      width: 200px;
    `}
`;

const DropDownHeader = styled.div<{
  isOpen: boolean;
  isRecentlyClosed: boolean;
}>`
  padding: 8px;
  margin-bottom: 0.3em;
  border: 1px solid #ced4da;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  color: #495057;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus {
    padding: 7px;
    outline: none;
    border-color: rgb(38, 132, 255);
    border-width: 2px;
    border-style: solid;
  }
`;

const DropDownListContainer = styled.div<{ size: Size }>`
  position: absolute;
  width: 200px;
  ${(props) =>
    props.size === 'small' &&
    css`
      width: 77px;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 123px;
    `}
${(props) =>
    props.size === 'large' &&
    css`
      width: 200px;
    `}
  z-index: 999;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 0;
  background: #fff;
  border: 1px solid #ced4da;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  list-style: none;
  &:first-child {
    padding-top: 0.25em;
  }
`;

const ListItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #dbe7f5;
  }
`;

const Placeholder = styled.span`
  user-select: none;
  color: #696969;
`;

const ArrowIcon = styled.div<{ isOpen?: boolean }>`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #808080;
  margin-left: 5px;
  transition: transform 0.3s ease;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

interface Option {
  value: string;
  label: string;
}

type Size = 'small' | 'medium' | 'large';

interface CustomSelectProps {
  options: Option[];
  onChange: (selectedOption: Option) => void;
  placeholder: string;
  size: Size;
  value: string;
}

export default function DropDownSelect({
  options,
  onChange,
  placeholder,
  size,
  value,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isRecentlyClosed, setIsRecentlyClosed] = useState(false);

  useEffect(() => {
    const option = options.find((optionUpdate) => optionUpdate.value === value);
    setSelectedOption(option || null);
  }, [value, options]);

  const toggling = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const onOptionClicked = (option: Option) => () => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsRecentlyClosed(true);
    onChange(option);
  };

  useEffect(() => {
    //if you click outside, should close the dropdown
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        event.target !== dropdownHeaderRef.current
      ) {
        setIsOpen(false);
        setIsRecentlyClosed(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const dropdownHeaderRef = useRef<HTMLDivElement>(null);

  return (
    <Main>
      <DropDownContainer size={size}>
        <DropDownHeader
          ref={dropdownHeaderRef}
          onClick={toggling}
          tabIndex={0}
          isOpen={isOpen}
          isRecentlyClosed={isRecentlyClosed}
        >
          {selectedOption ? (
            selectedOption.label
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
          <ArrowIcon isOpen={isOpen} />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer ref={dropdownRef} size={size}>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={option.value}>
                  {option.label}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}
