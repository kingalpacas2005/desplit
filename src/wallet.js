import { entity } from 'simpler-state';

export const wallet = entity(0);

export const reset = () => {
    wallet.set({
        accountAddress: ""
    })
}

export const set = _wallet => {
    console.log("state changed with", _wallet);
    wallet.set(_wallet)
}