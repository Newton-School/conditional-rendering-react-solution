import React from 'react';
import Enzyme, { shallow, configure, render, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';

describe('App tests', () => {

    test('Change State button exists', () => {

        const screen = render(<App />);

        const x = screen.find("#stateChangeButton");
        expect(x.text()).toEqual('Change State');
    })

    test('Change Style button exists', () => {

        const screen = render(<App />);

        const x = screen.find("#styleChangeButton");
        expect(x.text()).toEqual('Change Style');
    })

    test('Component exists with false initially', () => {

        const screen = render(<App />);

        const x = screen.find("#data");
        expect(x.text()).toEqual('False');
    })

    test('Component exists without styles initially', () => {

        const screen = render(<App />);

        const x = screen.find("#data");
        expect(x.hasClass('content')).toEqual(false);
    })

    test('Component state toggles', () => {

        const screen = mount(<App />);

        const stateChangeButton = screen.find("#stateChangeButton");
        const data = screen.find("#data");
        
        expect(data.text()).toEqual('False');
        
        // toggle state
        stateChangeButton.simulate("click")
        expect(data.text()).toEqual('True');

        // toggle state
        stateChangeButton.simulate("click")
        expect(data.text()).toEqual('False');
    })

    test('Component style toggles', async () => {

        const screen = mount(<App />);

        const styleChangeButton = screen.find("#styleChangeButton");
        const data = screen.find("#data");
        
        expect(data.hasClass('content')).toEqual(false);
        
        // toggle state
        await styleChangeButton.simulate('click');

        console.log(data.hasClass('content'));
        expect(data.hasClass('content')).toEqual(true);

        // // toggle state
        // styleChangeButton.simulate("click");
        // expect(data.hasClass('content')).toEqual(false);
    })
})