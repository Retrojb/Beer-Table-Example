import React from 'react';
import { render, cleanup } from '@testing-library/react'
import axiosMock from 'axios';
import api from '../api/api';
import BeerTable from './BeerTable';

jest.mock('axios', () => {
    return {
        _esModule: true,
        default: jest.fn()
    }
});

describe('Mock API call', () => {
    // Run a clean up after each test
    afterEach(cleanup);

    it('should get beer data', async () => {
        const mockURL = '';
        const {} = render(<BeerTable />)
    })
});