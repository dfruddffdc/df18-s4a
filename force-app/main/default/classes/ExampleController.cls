public with sharing class ExampleController
{
	private final static String DATE_FORMAT = 'YYYY-MM-dd';

    public String LowerDate {get; set;}
    public String UpperDate {get; set;}
    public String SearchTerm {get; set;}

	public ExampleController()
	{
		LowerDate = DateTime.newInstance(2018, 9, 24).format(DATE_FORMAT);
		UpperDate = DateTime.newInstance(2018, 9, 24).format(DATE_FORMAT);
		SearchTerm = '';
	}
}
