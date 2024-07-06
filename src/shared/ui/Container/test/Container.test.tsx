import { describe, expect, it } from 'vitest';
import { Container } from '../ui/Container';
import { render } from '@testing-library/react';

describe('Container', () => {
  it('should render children correctly', () => {
    const { container } = render(
      <Container>
        <p>Hello app!</p>
      </Container>
    );

    expect(container.querySelector('p')).toHaveTextContent('Hello app!');
  });
});