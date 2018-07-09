import { Selector } from 'redux-testkit';
import { getAgency } from '../../reducer/agency';

const agency1 = {
    logo: 'logo1',
};
const agency2 = {
    logo: 'logo2'
};

describe('store/properties/reducer/agency', () => {
    it('gets agency by logo', () => {
        const logo = 'logo1';
        const state = {
            'logo1': agency1,
            'logo2': agency2
        };
        Selector(getAgency).expect(state,logo ).toReturn(agency1);
    });
});