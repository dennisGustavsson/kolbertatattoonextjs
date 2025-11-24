export interface CareInstruction {
	title: string;
	text: string | string[];
}

export const careSteps: CareInstruction[] = [
	{
		title: "Hygien är nr1",
		text: "Tvätta alltid händerna innan du kommer i kontakt med din tatuering under läkningen.",
	},
	{
		title: "Omslag",
		text: [
			"När din tatuering är klar kommer du att få ett skydd över den innan du går hem. Jag använder mig oftast utav kompress, ibland om tatueringen är liten så kan jag använda vanligt plastfolie.",

			"Om du har fått kompress: Låt kompressen sitta kvar under den första natten och ta av den när du vaknar på morgonen. Du behöver inget mer skydd över tatueringen efter det, tatueringen kommer må bäst av att få luftas men tänk på att allt som kommer i kontakt med tatueringen ska vara rent, sånt som sängkläder och kläder. Skulle kompressen lossna på något ställe tidigare än väntat så kan du antingen tejpa på mer där det lossnat, om du har tejp hemma, annars tar du bara av dig den tidigare och sköter den som du skulle gjort morgonen efter.",

			"Om du fått plastfolie: Låt plastfolien sitta kvar i 2-3 timmar och ta sedan av den. Du behöver inte använda någon mer plast efter det.",
		],
	},
	// {
	// 	title: "Om du har fått kompress",
	// 	text: "Låt kompressen sitta kvar under den första natten och ta av den när du vaknar på morgonen. Du behöver inget mer skydd över tatueringen efter det, tatueringen kommer må bäst av att få luftas men tänk på att allt som kommer i kontakt med tatueringen ska vara rent, sånt som sängkläder och kläder. Skulle kompressen lossna på något ställe tidigare än väntat så kan du antingen tejpa på mer där det lossnat, om du har tejp hemma, annars tar du bara av dig den tidigare och sköter den som du skulle gjort morgonen efter.",
	// },
	// {
	// 	title: "Om du fått plastfolie",
	// 	text: "Låt plastfolien sitta kvar i 2-3 timmar och ta sedan av den. Du behöver inte använda någon mer plast efter det.",
	// },
	{
		title: "Tvätta",
		text: "Efter att du tagit av ditt omslag ska tatueringen tvättas. Tvätta den med ljummet vatten och med en parfymfri eller mild tvål. Gnugga försiktigt bort all plasma tills tatueringen är ren och fin. Därefter baddar du den torr med en ren tvättlapp eller en ren handduk. Upprepa denna process varje morgon och kväll under resten av läkningsperioden. En läkning kan ta mellan 1 och 3 veckor lite beroende på ditt läkkött och vilken tatuering du gjort.",
	},
	{
		title: "Smörja",
		text: "Efter att du tvättat tatueringen och baddat den torr så är det dags att smörja den. Det räcker med ett tunt lager, salvan ska arbetas försiktigt in i huden så att den absorberas. Den ska inte ligga som en tjock hinna på huden. Smörj varje gång efter att du har tvättat tatueringen.",
	},
	{
		title: "Produkter",
		text: "De produkter jag brukar rekommendera till läkningen är tvålen Lactacyd och salvan Bepanthen.",
	},
];

export const avoidList: CareInstruction[] = [
	{
		title: "Sol",
		text: "Håll din tatuering helt borta från solen under läkningen. Efter läkningen är det bra att smörja tatueringen med solkräm, då åldras den inte lika snabbt.",
	},
	{
		title: "Bad",
		text: "Bada inte i pool eller i sjön/havet under läkningen, där finns det bakterier som kan vara farliga för tatueringen.",
	},
	{
		title: "Bastu",
		text: "Undvik att basta under läkningen, det är inte bra med för mycket svett och värme.",
	},
	{
		title: "Träning",
		text: "Träning medför en risk för att få in bakterier i tatueringen genom kontakt med träningsutrustning, andra lagkamrater eller ditt eget svett. Jag brukar säga att det är okej att gymma efter ca 4a dagar då tatueringen inte längre vätskar eller är svullen MEN kör inget monsterpass, täck tatueringen med långärmat eller långbyxor och se till så att den inte kommer i kontakt med träningsutrustning. Ta sedan en dusch direkt efter gympasset! Andra sporter där du kommer i fysisk kontakt med andra människor ska du hålla dig borta ifrån helt och hållet under hela läkningen.",
	},
	{
		title: "Tajta kläder",
		text: "Undvik kläder som sitter tajt och som kan skava mot tatueringen.",
	},
];
