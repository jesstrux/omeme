import React from 'react';

const Tabs = ( props ) => {
    const { page } = props;
    let activeIndex = 0;
    if(page !== undefined)
        activeIndex = page;

    const tabs = ["ALL", "MEMES", "GIFS"];
    const tabNodes = document.querySelectorAll(".tab");

    for( let i = 0; i < tabNodes.length; i++){
        const tab = tabNodes[i];

        tab.onanimationend = function(){
            tab.classList.remove("ripple");
        }
    }

    function handleTabClicked(index){
        props.onTabbed(index);
        // let selectedTab = tabNodes[index];
        // selectedTab.classList.add("ripple");
        console.log(tabNodes);
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
 
export default Tabs;