import { getByTestId, getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Testing rendering of image", ()=>{
  test('logo contains alt as counter logo', ()=>{
    render(<App />);
    expect(screen.getByAltText(/counter logo/i)).toBeInTheDocument();
  });
});

describe('Testing Timer control buttons', ()=>{
  test('Render Start button', ()=>{
    render(<App />);
    expect(screen.getByText(/Start/i)).toBeInTheDocument();
  });

  test('Render Stop button', ()=>{
    render(<App />);
    expect(screen.getByText(/Stop/i)).toBeInTheDocument();
  });

  test('Render Reset button', ()=>{
    render(<App />);
    expect(screen.getByText(/Reset/i)).toBeInTheDocument();
  });
});

describe("Testing user interactions", ()=>{
  test('Start button text changes to pause on click', ()=>{
    render(<App />);
  
    const startBtn = screen.getByText(/start/i);
    userEvent.type(startBtn);
    expect(startBtn.textContent).toContain('PAUSE');
  });

  test("Start counter when start button is clicked",()=>{
    render(<App />);
    const seconds = screen.getByTitle('seconds');
    const startBtn = screen.getByText(/start/i);

    userEvent.type(startBtn);

    //test if the start button text changes to PAUSE
    expect(startBtn.textContent).toContain("PAUSE");


  });

  test("Counter increment on start button click", ()=>{

    render(<App />);
    const seconds = screen.getByTitle('seconds');
    const startBtn = screen.getByText(/start/i);

    userEvent.type(startBtn);

    //test counter increase on start button click
    const secondsText = setInterval(parseInt(seconds.textContent), 1000);
    expect(secondsText).toBeGreaterThanOrEqual(1);
  });


  test('Reset counter', ()=>{
    render(<App />);
    const seconds = screen.getByTitle('seconds');
    const startBtn = screen.getByText(/reset/i);
    userEvent.type(startBtn);
    expect(seconds.textContent).toEqual('0');
  });
});