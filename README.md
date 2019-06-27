# README
## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|user_name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|group_id|integer|null: false, foreign_key:true|

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages
- has_many :images


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|group_name|string|null: false|
|user_id|integer|null: false, foreign_key:true|

### Association
- has_many :members
- has_many :users, through: :members


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|group_id|integer|null: false, foreign_key:true|
|user_id|integer|null: false, foreign_key:true|

### Association
- belongs_to :user



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...