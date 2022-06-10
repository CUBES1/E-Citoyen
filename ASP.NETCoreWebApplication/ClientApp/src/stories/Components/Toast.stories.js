// Button.stories.js|jsx

import React from 'react';
import {Router, BrowserRouter} from 'react-router-dom';

import '../../App.scss';
import '../../custom.css'
import '../../components/NavMenu/NavMenu.css';
import {actions} from "@storybook/addon-actions";
import {userEvent, within} from "@storybook/testing-library";
import {FilledForm} from "../Views/AddRess.stories";
import ToastCustom from "../../components/Toast";
import {Delete} from "./Modal.stories";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Component/SideBarInfo',
    component: ToastCustom,
};


const Template = (args) => <ToastCustom {...args} />;


export const Empty = () => <ToastCustom />;
Empty.storyName = 'Empty';


export const Signal = Template.bind({});
Signal.args =
    {
        isOpen: true,
        case: 'signal',
    }
;
Signal.storyName = 'Signal';


export const CreateROk = Template.bind({});
CreateROk.args =
    {
        isOpen: true,
        case: 'createRessourceOk',
    }
;
CreateROk.storyName = 'Create Ressource Ok';

export const CreateRNok = Template.bind({});
CreateRNok.args =
    {
        isOpen: true,
        case: 'createRessourceNok',
    }
;
CreateRNok.storyName = 'Create Ressource Nok';




export const deleteRessourceOk = Template.bind({});
deleteRessourceOk.args =
    {
        isOpen: true,
        case: 'deleteRessourceOk',
    }
;
deleteRessourceOk.storyName = 'Delete Ressource Ok';

export const deleteRessourceNok = Template.bind({});
deleteRessourceNok.args =
    {
        isOpen: true,
        case: 'deleteRessourceNok',
    }
;
deleteRessourceNok.storyName = 'Delete Ressource Nok';


export const addFriendOk = Template.bind({});
addFriendOk.args =
    {
        isOpen: true,
        case: 'addFriendOk',
    }
;
addFriendOk.storyName = 'Add Friend Ok';

export const addFriendNok = Template.bind({});
addFriendNok.args =
    {
        isOpen: true,
        case: 'addFriendNok',
    }
;
addFriendNok.storyName = 'Add Friend Nok';

export const addFriendAlready = Template.bind({});
addFriendAlready.args =
    {
        isOpen: true,
        case: 'addFriendAlready',
    }
;
addFriendAlready.storyName = 'Add Friend Already';
