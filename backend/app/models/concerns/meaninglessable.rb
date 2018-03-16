require_relative 'string_is_meaningless'

module Meaninglessable
  extend ActiveSupport::Concern

  included do
    validate :is_meaningless
  end

  def is_meaningless
    errors.add(:base, 'Че за хуйню ты написал?') if try(:title).try(:meaningless?) || body.meaningless?
  end

end