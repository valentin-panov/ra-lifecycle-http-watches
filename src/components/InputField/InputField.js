/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import CustomInput from './CustomInput/CustomInput';

function InputField(props) {
  const { onChangeHandler, onSubmitHandler, inputData, inputType, btnText } =
    props;
  return (
    <form className='InputField' onSubmit={onSubmitHandler}>
      {inputData.map((item) => (
        <CustomInput
          key={item.id}
          inputName={item.inputName}
          inputLabel={item.inputLabel}
          inputType={item.inputType}
          onChangeHandler={onChangeHandler}
        />
      ))}
      <Button text={btnText} />
    </form>
  );
}

InputField.propTypes = {};

export default InputField;
