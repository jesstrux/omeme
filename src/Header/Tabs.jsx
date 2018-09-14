import React from 'react';
import lifecycle from 'react-pure-lifecycle';

const methods = {
    componentDidMount(props) {
        const tabNodes = document.querySelectorAll(".tab");

        for( let i = 0; i < tabNodes.length; i++){
            const tab = tabNodes[i];

            tab.onclick = () => {
                tab.classList.add("ripple");
            }

            tab.addEventListener("animationend", () => {
                console.log("Animation ended!!");
                tab.classList.remove("ripple");
            });
        }
    }
};

const Tabs = ( props ) => {
    const { page } = props;
    let activeIndex = 0;
    if(page !== undefined)
        activeIndex = page;

    const tabs = ["ALL", "MEMES", "GIFS"];

    function handleTabClicked(index){
        props.onTabbed(index);
    }

    return ( 
        <div id="tabs">
            { tabs.map( (tab, index) => {
                let tabClass = 'tab';
                tabClass += index === activeIndex ? ' active' : '';

                return (
                    <button className={ tabClass } key={index}
                        onClick={ () => handleTabClicked(index) }>
                        { tab }
                    </button>
                )
            }) }
        </div>
    );
}

export default lifecycle(methods)(Tabs);