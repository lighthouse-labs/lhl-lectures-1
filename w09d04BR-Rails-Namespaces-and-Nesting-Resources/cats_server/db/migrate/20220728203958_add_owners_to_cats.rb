class AddOwnersToCats < ActiveRecord::Migration[6.0]
  def change
    add_reference :cats, :owner
  end
end