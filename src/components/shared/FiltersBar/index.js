import React from 'react';
import { Select } from 'antd';

import './styles.scss';

const { Option } = Select;

const children = [];
// eslint-disable-next-line
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function FiltersBar() {
  return (
    <div className="FiltersBar">
      <div className="FiltersBar_dropdown_container">
        <Select mode="tags" placeholder="Select venue" className="FiltersBar_dropdown" onChange={handleChange} tokenSeparators={[',']}>
          {children}
        </Select>
        <Select mode="tags" placeholder="Select theme" className="FiltersBar_dropdown" onChange={handleChange} tokenSeparators={[',']}>
          {children}
        </Select>
      </div>
      <div className="FiltersBar_icon_container">
        <img src={require('../../../assets/filter.svg')} alt="Filter" />
      </div>
    </div>
  );
}

export default React.memo(FiltersBar);
