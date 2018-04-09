module AbilityScope
  extend ActiveSupport::Concern

  included do
    serialization_scope :current_ability
  end

  private

  def current_ability
    @current_ability ||= Ability.new(current_user)
  end

end
