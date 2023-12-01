import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = (props) => {
    const { children } = props;

    return (
        <div className="bodySectionWithMargin">
            <BodySection {...props}>
                {children}
            </BodySection>
        </div>
    );
}

BodySectionWithMarginBottom.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;