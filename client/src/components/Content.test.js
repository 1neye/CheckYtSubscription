import { render, screen } from "@testing-library/react";
import Content from "./Content";

describe('Content component is working?', () => {

    test('renders fine', () => {
        render(<Content />);

        const el = screen.getByText(/Спасибо/i)
        expect(el).toBeInTheDocument()
    })
})