export const HELLO_SETUP = "HELLO_SETUP";
export type HELLO_SETUP = typeof HELLO_SETUP;

export interface HelloSetupAction {
    type: HELLO_SETUP
    hello: string
}

export const helloSetupAction = (hello: string): HelloSetupAction => ({
        type: HELLO_SETUP,
        hello
});

export type HelloAction = HelloSetupAction;