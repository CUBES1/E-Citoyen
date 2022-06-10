// Button.stories.js|jsx

import React from 'react';
import {Router, BrowserRouter} from 'react-router-dom';
import AddDebate from '../../view/MesRessources/Debate/AddRessource';

import '../../App.scss';
import '../../custom.css'
import {Add} from "@material-ui/icons";
import {userEvent, within} from "@storybook/testing-library";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'View/Add Ressource',
    component: AddDebate,
    parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args) => <AddDebate {...args} />;


export const Title = Template.bind({});
Title.args =
    {
      
    }
;
Title.storyName = 'Empty form';



export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('titre'), 'test de ressource', {
        delay: 10,
    });

    await userEvent.click(canvas.getAllByRole('combobox')[0], {
        delay: 50,
    });

    await userEvent.type(canvas.getAllByRole('combobox')[0], 'News', {
        delay: 10,
    });

    await userEvent.click(canvas.getAllByRole('combobox')[1], {
        delay: 10,
    });

    await userEvent.type(canvas.getByTestId('desc'), 'Je suis un long text avec des retours ligne\n et voilà', {
        delay: 10,
    });
   
    
    await userEvent.click(canvas.getByTestId('validateButton'));
};

