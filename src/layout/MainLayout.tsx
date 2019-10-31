import React from 'react';
import './MainLayout.scss';
import Tabs from '../components/Tabs/index';

interface IProps {
    history: any;
    location: any;
}

interface IState {
    collapsed: Boolean;
    activeIndex: number;
}

export default class MainLayout extends React.Component<IProps, IState> {
    state: IState = {
        collapsed: false,
        activeIndex: 0,
    };

    tabList: any[] = [
        {
            key: 0,
            text: '点餐',
            icon: 'home',
        },
        {
            key: 1,
            text: '订单',
            icon: 'order',
        },
        {
            key: 2,
            text: '我的',
            icon: 'my',
        },
    ];

    componentDidMount(): void {
        const {location} = this.props;
        let activeIndex = 0;
        switch (location.pathname) {
            case '/':
                activeIndex = 0;
                break;
            case '/index/order':
                activeIndex = 1;
                break;
            case '/index/my':
                activeIndex = 2;
                break;
            default:
                break;
        }
        this.setState({activeIndex});
    }

    toggle = (): void => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    handleChange = (index: number): void => {
        const {history} = this.props;
        let url = '/';
        switch (index) {
            case 0:
                url = '/';
                break;
            case 1:
                url = '/index/order';
                break;
            case 2:
                url = '/index/my';
                break;
            default:
                break;
        }
        this.setState({
            activeIndex: index,
        });
        history.replace(url);
    };

    render() {
        const {activeIndex} = this.state;
        return (
            <div className='main-layout'>
                <div className='page-wrapper'>
                    {this.props.children}
                </div>
                <Tabs onTabChange={this.handleChange} activeIndex={activeIndex} tabList={this.tabList}/>
            </div>
        );
    }
}
