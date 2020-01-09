package interface_objects;

import java.util.List;

/**
 * This class is responsible to receive the frontend JSON model.
 * IMPORTANT: The attributes in this class must be correlated (same name and type) with the JSON attributes.
 * @author marcel
 * @email marcel.serikawa@gmail.com
 */
public class InputModel {
	private List<InputActor> actors;
	private List<InputIntention> intentions;
	private List<InputLink> links;
	private List<InputDynamic> dynamics;
	private List<InputConstraint> constraints;
	private List<InputEvaluation> userEvaluations;
	
	
	
	public List<InputEvaluation> getUserEvaluations() {
		return userEvaluations;
	}

	public void setUserEvaluations(List<InputEvaluation> userEvaluations) {
		this.userEvaluations = userEvaluations;
	}

	public List<InputActor> getActors() {
		return actors;
	}
	
	public void setActors(List<InputActor> actors) {
		this.actors = actors;
	}
	
	public List<InputIntention> getIntentions() {
		return intentions;
	}
	
	public void setIntentions(List<InputIntention> intentions) {
		this.intentions = intentions;
	}
	
	public List<InputLink> getLinks() {
		return links;
	}
	
	public void setLinks(List<InputLink> links) {
		this.links = links;
	}
	
	public List<InputDynamic> getDynamics() {
		return dynamics;
	}
	
	public void setDynamics(List<InputDynamic> dynamics) {
		this.dynamics = dynamics;
	}

	public List<InputConstraint> getConstraints() {
		return constraints;
	}

	public void setConstraints(List<InputConstraint> constraints) {
		this.constraints = constraints;
	}
	
		
}
