import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('renders input field and add button', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  test('adds a new todo when add button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  test('adds a new todo when Enter key is pressed', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    fireEvent.change(input, { target: { value: 'Test todo with Enter' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    
    expect(screen.getByText('Test todo with Enter')).toBeInTheDocument();
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    expect(screen.queryByText('   ')).not.toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    // Add a todo
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addButton);
    
    // Find the checkbox and toggle it
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    // Add a todo
    fireEvent.change(input, { target: { value: 'Test todo to delete' } });
    fireEvent.click(addButton);
    
    // Verify todo is added
    expect(screen.getByText('Test todo to delete')).toBeInTheDocument();
    
    // Delete the todo
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    
    // Verify todo is removed
    expect(screen.queryByText('Test todo to delete')).not.toBeInTheDocument();
  });

  test('clears input field after adding todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addButton);
    
    expect(input.value).toBe('');
  });

  test('handles multiple todos correctly', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    // Add multiple todos
    const todos = ['First todo', 'Second todo', 'Third todo'];
    
    todos.forEach(todo => {
      fireEvent.change(input, { target: { value: todo } });
      fireEvent.click(addButton);
    });
    
    // Verify all todos are displayed
    todos.forEach(todo => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });
});

