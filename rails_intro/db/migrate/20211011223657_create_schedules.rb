class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.string :day
      t.date :event_date
      t.string :event_name

      t.timestamps
    end
  end
end
