import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = ({ props }) => {
  const { name, value, onChange } = props.input;
  return (
    <div className="field">
      <label>{props.label}</label>
      <Slider
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        dots
        step={1}
        min={0}
        max={10}
        className="common-slider-style"
        trackStyle={{ backgroundColor: '#00599a' }}
        handleStyle={{
          border: '1px solid #00599a',
          width: '20px',
          height: '20px',
          top: '1px'
        }}
        activeDotStyle={{
          border: '1px solid #00599a',
          width: '10px',
          height: '10px'
        }}
      />
    </div>
  );
};

export default RangeSlider;
