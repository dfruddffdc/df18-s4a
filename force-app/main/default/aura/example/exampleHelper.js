({
	handleCancelButtonPress: function(component) {
		this.showToast('info', 'Cancel button pressed');
	},
	
	handleSearchButtonPress: function(component) {
		var allValid = component
			.find('formField')
			.reduce(function (validSoFar, inputCmp) {
				inputCmp.reportValidity();
				return validSoFar && inputCmp.checkValidity();
			}, true);
		
        if (allValid) {
			this.showToast('success', 'Searched for "' + component.get('v.searchTerm') + '"');
        } else {
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
