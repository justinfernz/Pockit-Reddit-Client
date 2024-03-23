import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Article from '../Article';

describe(Article, () => {
    it("should display no article titles initially", () => {
        const { getByTestId } = render(<Article article={[]} />);
        const articleTitles = getByTestId("titles").textContent;
        expect(articleTitles).textContent = false;
    });
    it("should display a list of article titles after input", () => {
        const { getByTestId } = render(<Article article={[]} />);
        const articleTitles = getByTestId("titles").textContent;
        userEvent.keyboard('foo', articleTitles)
        expect(articleTitles).textContent = true;
    });
});