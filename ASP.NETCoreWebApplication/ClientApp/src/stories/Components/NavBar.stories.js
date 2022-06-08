// Button.stories.js|jsx

import React from 'react';
import {Router, BrowserRouter} from 'react-router-dom';
import {NavMenu} from '../../components/NavMenu';

import '../../App.scss';
import '../../custom.css'
import '../../components/NavMenu/NavMenu.css';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Component/NavBar',
    component: NavMenu,
    parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args) => <NavMenu {...args} />;

export const GoBack = Template.bind({});
GoBack.args =
    {
        goBack: true,
    }
;
GoBack.storyName = 'Go back';

export const Title = Template.bind({});
Title.args =
    {
        title: "Accueil",
    }
;
Title.storyName = 'With title';


export const TitleSub = Template.bind({});
TitleSub.args =
    {
        title: "Accueil",
        subtitle: "Les ressources dont vous avez besoin",
    }
;
TitleSub.storyName = 'With title and subtitle';