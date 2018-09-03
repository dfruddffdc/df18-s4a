({
	handleCancelButtonPress: function(component) {
		this.showToast('info', 'Cancel button pressed');
	},
	
	handleSearchButtonPress: function(component) {
		// Get form fields
		var formFields = component.find('formField'),
			invalidField;

		// Update validity for all fields
		formFields.forEach(function (formField) {
			formField.reportValidity();
		});
		
		// Find the first problem field (if any)
		invalidField = formFields.find(function (formField) {
			return !formField.checkValidity();
		});
		
        if (!invalidField) {
			// Report the success
			this.showToast('success', 'Searched for "' + component.get('v.searchTerm') + '"');
        } else {
			// Focus on the problem element so the user can deal with it
			invalidField.focus();
			
			// Report the error
			this.showToast('error', 'Resolve the form errors and try again.');
		}
	},
	
    handleSettingsButtonPress: function(component) {
		this.showToast('info', 'Settings button pressed');
	},
	
	showToast: function (type, message) {
		var toast = $A.get("e.force:showToast");
		toast.setParams({
			message: message || type, // when there's no message, use type as fallback
			type: type
		});
		toast.fire();
	},
})
