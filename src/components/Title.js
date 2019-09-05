import React from 'react';

const TITLES = [
    'a software engineer',
    'a music lover', 
    'an enthusiastic learner',
    'an adventure seeker'
];

class Title extends React.Component{
    state={titleIndex: 0};
    componentDidMount() {
        this.animateTitles();
    }

    componentWillUnmount(){

        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex})
        }, 4000);
        console.log('this.titleInterval', this.titleInterval)
    }
    render(){
        const title = TITLES[this.state.titleIndex];
        return (
                <p>I am {title}</p>
        )
    }
}

export default Title;