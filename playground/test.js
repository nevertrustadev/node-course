import {API} from "./api";

describe("getting one product", () => {
    test("ID 10 exists", async () => {

        // set up Pact interactions
        await provider.addInteraction({
            state: 'product with ID 10 exists',
            uponReceiving: 'get product with ID 10',
            withRequest: {
                method: 'GET',
                path: '/products/10'
            },
            willRespondWith: {
                status: 200,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: {
                    id: Matchers.like("10"),
                    type: Matchers.like("CREDIT_CARD"),
                    name: Matchers.like("28 Degrees")
                },
            },
        });

        let api = new API(provider.mockService.baseUrl);

        // make request to Pact mock server
        let product = await api.getProduct("10");

        expect(product).toStrictEqual({
            id: "10",
            type: "CREDIT_CARD",
            name: "28 Degrees"
        });
    });
});