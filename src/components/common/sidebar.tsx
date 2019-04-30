import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { themeBreakPoints, themeDimensions } from '../../themes/commons';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const SidebarWrapper = styled.div`
    flex-shrink: 0;
    max-width: 100%;
    width: 100%;

    @media (min-width: ${themeBreakPoints.xl}) {
        min-width: ${themeDimensions.sidebarWidth};
        width: ${themeDimensions.sidebarWidth};
    }

    &:first-child {
        @media (min-width: ${themeBreakPoints.xl}) {
            margin-right: 10px;
        }
    }

    &:last-child {
        @media (min-width: ${themeBreakPoints.xl}) {
            margin-left: 10px;
        }
    }
`;

export const Sidebar: React.FC<Props> = props => {
    const { children, ...restProps } = props;

    return <SidebarWrapper {...restProps}>{children}</SidebarWrapper>;
};
