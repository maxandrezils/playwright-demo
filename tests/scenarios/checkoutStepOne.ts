export const checkoutStepOneScenarios = [
	{
		testCase: "No Values populated",
		firstName: "",
		lastName: "",
		postalCode: "",
		errorMessage: "",
	},
	{
		testCase: "Only first name populated",
		firstName: "Max",
		lastName: "",
		postalCode: "",
		errorMessage: "",
	},
	{
		testCase: "Postal code not populated.",
		firstName: "max",
		lastName: "Zils",
		postalCode: "",
		errorMessage: "",
	},
];
