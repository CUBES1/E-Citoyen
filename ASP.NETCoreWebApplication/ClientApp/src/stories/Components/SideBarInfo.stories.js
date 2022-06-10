// Button.stories.js|jsx

import React from 'react';
import {Router, BrowserRouter} from 'react-router-dom';
import SideBarInfo from '../../components/SideBarInfo';

import '../../App.scss';
import '../../custom.css'
import '../../components/NavMenu/NavMenu.css';
import {actions} from "@storybook/addon-actions";
import {userEvent, within} from "@storybook/testing-library";
import {FilledForm} from "../Views/AddRess.stories";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Component/SideBarInfo',
    component: SideBarInfo,
};


const Template = (args) => <SideBarInfo {...args} />;


export const Empty = () => <SideBarInfo/>;
Empty.storyName = 'Normal';
