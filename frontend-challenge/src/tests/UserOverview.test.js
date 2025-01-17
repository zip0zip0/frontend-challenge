import { render } from '@testing-library/react';
import UsersOverview from '../components/UsersOverview';
import { act } from 'react-dom/test-utils';

describe('UserOverview', () => {
    beforeEach(() => {
        // Mock the global fetch function
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([
                        {
                            "id": 1,
                            "name": "Leanne Graham",
                            "username": "Bret",
                            "email": "Sincere@april.biz",
                            "address": {
                                "street": "Kulas Light",
                                "suite": "Apt. 556",
                                "city": "Gwenborough",
                                "zipcode": "92998-3874",
                                "geo": {
                                    "lat": "-37.3159",
                                    "lng": "81.1496"
                                }
                            },
                            "phone": "1-770-736-8031 x56442",
                            "website": "hildegard.org",
                            "company": {
                                "name": "Romaguera-Crona",
                                "catchPhrase": "Multi-layered client-server neural-net",
                                "bs": "harness real-time e-markets"
                            }
                        },
                        {
                            "id": 2,
                            "name": "Ervin Howell",
                            "username": "Antonette",
                            "email": "Shanna@melissa.tv",
                            "address": {
                                "street": "Victor Plains",
                                "suite": "Suite 879",
                                "city": "Wisokyburgh",
                                "zipcode": "90566-7771",
                                "geo": {
                                    "lat": "-43.9509",
                                    "lng": "-34.4618"
                                }
                            },
                            "phone": "010-692-6593 x09125",
                            "website": "anastasia.net",
                            "company": {
                                "name": "Deckow-Crist",
                                "catchPhrase": "Proactive didactic contingency",
                                "bs": "synergize scalable supply-chains"
                            }
                        }
                    ]
                )
            })
        );
    });

    
    afterEach(() => {
        jest.restoreAllMocks();
    });
    

    it('renders without error', () => {
        const { getByTestId } = render(<UsersOverview />);
        const usersOverview = getByTestId('user-overview');
        expect(usersOverview).toBeInTheDocument();
    });

    it('fetches data from API and sets state correctly', async () => {
        const { getByText } = render(<UsersOverview />);
    
        await act(async () => {
            await Promise.resolve();
        });
    
        // Checking that the fetch function was called with the correct URL
        expect(fetch).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/users'
        );
    
        // Checking that the state was set correctly
        expect(getByText('Leanne Graham')).toBeInTheDocument();
    });

    it('renders error message when fetch fails', async () => {
        global.fetch = jest.fn(() => Promise.reject('API is down'));
        const { getByText } = render(<UsersOverview />);
    
        await act(async () => {
            await Promise.resolve();
        });
    
        expect(getByText('No contacts found')).toBeInTheDocument();
    });

    // This test is not working,,, not sure why
    it('When the "search" state variable is set to "Rolf", expect "no contacts found" to be rendered', async () => {
        const { getByText, rerender } = render(<UsersOverview />);
        
        await act(async () => {
            await Promise.resolve();
        });
        
        expect(getByText('Leanne Graham')).toBeInTheDocument();
        expect(getByText('Ervin Howell')).toBeInTheDocument();
        
        // Set the "search" state variable to "Rolf"
        const searchInput = document.querySelector('input');
        searchInput.value = 'Rolf';
        
        // Simulate the "onChange" event on the input element
        searchInput.dispatchEvent(new Event('change', { bubbles: true }));
        
        // Re-render the component
        rerender(<UsersOverview />);
        
        await act(async () => {
            await Promise.resolve();
        });
        
        // Check that the "no contacts found" message is displayed
        await act(async () => {
            expect(getByText('No contacts found')).toBeInTheDocument();
        });
    });
});