class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :description, null: false
      t.string :catagory
      t.integer :severity, null: false, default: 0
      t.integer :timeout_duration_seconds
      
      t.timestamp :resolved_at
      t.timestamps
    end
  end
end
