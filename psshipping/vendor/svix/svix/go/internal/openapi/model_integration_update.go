/*
 * Svix API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.1.1
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// IntegrationUpdate struct for IntegrationUpdate
type IntegrationUpdate struct {
	Name string `json:"name"`
}

// NewIntegrationUpdate instantiates a new IntegrationUpdate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewIntegrationUpdate(name string) *IntegrationUpdate {
	this := IntegrationUpdate{}
	this.Name = name
	return &this
}

// NewIntegrationUpdateWithDefaults instantiates a new IntegrationUpdate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewIntegrationUpdateWithDefaults() *IntegrationUpdate {
	this := IntegrationUpdate{}
	return &this
}

// GetName returns the Name field value
func (o *IntegrationUpdate) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *IntegrationUpdate) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *IntegrationUpdate) SetName(v string) {
	o.Name = v
}

func (o IntegrationUpdate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["name"] = o.Name
	}
	return json.Marshal(toSerialize)
}

type NullableIntegrationUpdate struct {
	value *IntegrationUpdate
	isSet bool
}

func (v NullableIntegrationUpdate) Get() *IntegrationUpdate {
	return v.value
}

func (v *NullableIntegrationUpdate) Set(val *IntegrationUpdate) {
	v.value = val
	v.isSet = true
}

func (v NullableIntegrationUpdate) IsSet() bool {
	return v.isSet
}

func (v *NullableIntegrationUpdate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIntegrationUpdate(val *IntegrationUpdate) *NullableIntegrationUpdate {
	return &NullableIntegrationUpdate{value: val, isSet: true}
}

func (v NullableIntegrationUpdate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIntegrationUpdate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


