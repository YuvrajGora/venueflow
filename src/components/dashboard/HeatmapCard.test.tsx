import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeatmapCard } from './HeatmapCard';

describe('HeatmapCard', () => {
  it('renders the title correctly', () => {
    render(<HeatmapCard />);
    expect(screen.getByText('Live Venue Map')).not.toBeNull();
  });

  it('displays a Rerouting suggested message', () => {
    render(<HeatmapCard />);
    expect(screen.getByText('Rerouting suggested')).not.toBeNull();
  });
});
