class CreateDocuments < ActiveRecord::Migration[5.1]
  def change
    enable_extension 'pgcrypto'

    create_table :documents, id: :uuid do |t|
      t.references :parent

      t.string :title, null: false
      t.string :slug, null: false
      t.text :content

      t.timestamps
    end

    add_index :documents, [:parent_id, :slug], unique: true
  end
end
