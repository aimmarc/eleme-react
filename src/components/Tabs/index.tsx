import React from 'react';
import './index.scss';

interface IProps {
    onTabChange: Function;
    activeIndex: number;
    tabList: any[];
}

const Tabs: React.FC<IProps> = (props) => {

    return (
        <div className='tabs-wrap'>
            {
                props.tabList.map(item => (
                    <div
                        key={item.key}
                        className={props.activeIndex === item.key ? 'tabs-item active' : 'tabs-item'}
                        onClick={() => {
                            props.onTabChange(item.key);
                        }}
                    >
                        <i className={`tabs-icon ${item.icon}`}></i>
                        <br/>
                        {item.text}
                    </div>
                ))
            }
        </div>
    )
};

export default Tabs;
