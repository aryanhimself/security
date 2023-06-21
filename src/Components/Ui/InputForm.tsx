const InputForm = ({ ...otherProps }) => {
  return (
    <div>
      <input {...otherProps} className="form__control" />
    </div>
  );
};

export default InputForm;
