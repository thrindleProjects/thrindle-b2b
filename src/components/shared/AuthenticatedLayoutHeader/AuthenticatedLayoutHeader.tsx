const AuthenticatedLayoutHeader: React.FC<{
  headerClassName?: string;
  headerText?: string;
  subText?: string;
  component?: JSX.Element;
}> = ({ headerClassName, headerText, subText, component }) => {
  return (
    <div
      className={`flex w-full items-center justify-between py-6 ${headerClassName}`}
    >
      <section>
        <h1 className='text-2xl font-medium'>{headerText}</h1>
        <p className='mt-1 w-3/5'>{subText}</p>
      </section>
      {component}
    </div>
  );
};

export default AuthenticatedLayoutHeader;
