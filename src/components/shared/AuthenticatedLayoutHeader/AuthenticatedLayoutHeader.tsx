const AuthenticatedLayoutHeader: React.FC<{
  headerClassName?: string;
  headerText?: string;
  subText?: string;
  component?: JSX.Element;
  afterComponent?: JSX.Element;
  before?: boolean;
  after?: boolean;
}> = ({
  headerClassName,
  headerText,
  subText,
  component,
  before,
  after,
  afterComponent,
}) => {
  return (
    <div
      className={`flex w-full items-center justify-between py-6 ${headerClassName}`}
    >
      <section>
        {before && component}
        <h1 className='text-2xl font-semibold'>{headerText}</h1>
        <p className='mt-1 w-3/5'>{subText}</p>
      </section>
      {!before && component}
      {after && afterComponent}
    </div>
  );
};

export default AuthenticatedLayoutHeader;
