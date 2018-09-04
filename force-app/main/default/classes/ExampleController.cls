public with sharing class ExampleController
{
    public Date LowerDate {get; set;}
    public Date UpperDate {get; set;}
    public String SearchTerm {get; set;}

	public ExampleController()
	{
		LowerDate = Date.today();
		UpperDate = Date.today();
		SearchTerm = '';
	}
}
