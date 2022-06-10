// Button.stories.js|jsx

import React from 'react';
import {Router, BrowserRouter} from 'react-router-dom';
import CardRessources from '../../components/CardRessources';

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
    title: 'Component/CardRessources',
    component: CardRessources,
};


const Template = (args) => <CardRessources {...args} />;


export const Empty = () => <CardRessources/>;
Empty.storyName = 'Empty';


export const Full = Template.bind({});
Full.args =
    {
        username: "Jean Louis",
        isUserRess: true,
        canEdit: true,
        img: `https://source.unsplash.com/random/800x400`,
        title: "Testing Resources",
        dateTime: "2020-01-01 10:20:30",
        id: 1,
        key: 1,
    }
;

Full.play = async ({ canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);
    
    await userEvent.click(canvas.getByTestId("FavoriteBorderIcon"));
    await userEvent.click(canvas.getByTestId("BookmarkBorderIcon"));
    /*await userEvent.click(canvas.getByTestId("ReplyIcon"));*/
    /*await userEvent.click(canvas.getByTestId("EditIcon"));*/
    /*await userEvent.click(canvas.getByTestId("DeleteIcon"));*/
};

Full.storyName = 'With content editable';

/*
export const TitleSub = Template.bind({});
TitleSub.args =
    {
        title: "Accueil",
        subtitle: "Les ressources dont vous avez besoin",
    }
;
TitleSub.storyName = 'With title and subtitle';*/
