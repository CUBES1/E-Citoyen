// Button.stories.js|jsx

import React from 'react';
import {Router, BrowserRouter} from 'react-router-dom';

import '../../App.scss';
import '../../custom.css'
import '../../components/NavMenu/NavMenu.css';
import ModalCustom from "../../components/Modal";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Component/Modal',
    component: ModalCustom,
    parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args) => <ModalCustom {...args} />;



export const Empty = Template.bind({});
Empty.args =
    {
        isOpen: true,
    }
;
Empty.storyName = 'Empty';

export const Signal = Template.bind({});
Signal.args =
    {
        isOpen: true,
        case: 'signal',
    }
;
Signal.storyName = 'Signalement';


export const Delete = Template.bind({});
Delete.args =
    {
        isOpen: true,
        case: 'delete',
    }
;
Delete.storyName = 'Delete';