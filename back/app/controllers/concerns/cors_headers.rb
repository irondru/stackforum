module CorsHeaders
  extend ActiveSupport::Concern

  included do
    before_action :cors_headers
  end

  private

  def cors_headers
    response.headers["Access-Control-Allow-Credentials"] = 'true'
    response.headers['Access-Control-Allow-Origin'] = request.headers["Origin"]
    response.headers['Access-Control-Allow-Methods'] = 'GET, PATCH, PUT, DELETE, POST, OPTIONS'
  end

end
