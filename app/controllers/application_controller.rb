class ApplicationController < ActionController::Base
	before_action :set_current_route
	
	private
	
	def set_current_route
		@current_route = params[:current_route]
	end
end
