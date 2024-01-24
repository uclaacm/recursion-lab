const Goal = ({ children }: { children: any }): JSX.Element => {
  return (
    <div className="goal-container">
      <div className="goal">{children}</div>
    </div>
  );
};

export default Goal;
