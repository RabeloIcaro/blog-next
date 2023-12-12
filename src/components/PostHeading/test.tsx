import { render } from '@testing-library/react';
import { Heading } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

describe('<Heading/>', () => {
  it('should render a heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading>Oi</Heading>;
      </ThemeProvider>,
    );
  });
});
