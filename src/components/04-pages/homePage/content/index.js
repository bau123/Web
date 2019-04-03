import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Content from './sectionOne/'

const Fullpage = () => (
    <ReactFullpage
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <Content/>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                    <div className="section">
                    </div>

                </ReactFullpage.Wrapper>
            );
        }}
    />
);


export default Fullpage